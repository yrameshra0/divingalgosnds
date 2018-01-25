const STATE = {
  BLANK: 'BLANK',
  PARTIAL: 'PARTIAL',
  COMPLETED: 'COMPLETED'
};

const graph = function graph() {
  const nodeKeeper = {};
  const nodes = [];
  const getOrCreateNode = function getOrCreateNode(projectName) {
    if (nodeKeeper[projectName] === undefined) {
      const newProject = project(projectName);
      nodeKeeper[projectName] = newProject;
      nodes.push(newProject);
    }

    return nodeKeeper[projectName];
  };
  const addEdges = function addEdges(startEdge, endEdge) {
    const startNode = getOrCreateNode(startEdge);
    const endNode = getOrCreateNode(endEdge);

    startNode.addNeighbor(endNode);
  };
  const getNodes = function getNodes() {
    return nodes;
  };

  return {
    getOrCreateNode: getOrCreateNode,
    addEdges: addEdges,
    getNodes: getNodes
  };
};
const project = function project(projectName) {
  const name = projectName;
  const nodeKeeper = {};
  const children = [];
  let state = STATE.BLANK;
  let dependencies = 0;
  const incrementDependencies = function incrementDependencies() {
    dependencies++;
  };
  const decrementDependencies = function decrementDependencies() {
    dependencies--;
  };
  const getDependencies = function getDependencies() {
    return dependencies;
  };
  const addNeighbor = function addNeighbor(dependentProject) {
    if (nodeKeeper[dependentProject.getName()] === undefined) {
      nodeKeeper[dependentProject.getName] = dependentProject;
      children.push(dependentProject);
      dependentProject.incrementDependencies();
    }
  };
  const getChildren = function getChildren() {
    return children;
  };
  const getName = function getName() {
    return name;
  };
  const getState = function getState() {
    return state;
  };
  const setState = function setState(currentState) {
    state = currentState;
  };

  return {
    getName: getName,
    addNeighbor: addNeighbor,
    incrementDependencies: incrementDependencies,
    decrementDependencies: decrementDependencies,
    getChildern: getChildren,
    getDependencies: getDependencies,
    getState: getState,
    setState: setState
  };
};
const newGraph = function graphBuilder(projects, dependencies) {
  let newGraph = graph();

  projects.forEach(project => {
    newGraph.getOrCreateNode(project);
  });

  dependencies.forEach(dependenciesPair => {
    newGraph.addEdges(dependenciesPair[0], dependenciesPair[1]);
  });

  return newGraph;
};

function buildOrderByLookUp(projects, dependencies) {
  return (function orderProjects(projects) {
    const order = [];
    let endOfList = addNonDependentProjects(projects, 0);
    let toBeProcessed = 0;

    while (toBeProcessed < projects.length) {
      let current = order[toBeProcessed];

      if (current === undefined) return;

      let children = current.getChildern();
      children.forEach(child => child.decrementDependencies());

      endOfList = addNonDependentProjects(children, endOfList);
      toBeProcessed++;
    }

    function addNonDependentProjects(projects, offset) {
      projects.forEach(project => {
        if (project.getDependencies() === 0) {
          order[offset] = project;
          offset++;
        }
      });

      return offset;
    }

    return order.map(project => project.getName());
  })(newGraph(projects, dependencies).getNodes());
}

function buildOrderByDfsLookUp(projects, dependencies) {
  return (function orderProjects(projects) {
    const order = [];

    for (let i = 0; i < projects.length; i++) {
      let project = projects[i];

      if (project.getState() === STATE.BLANK) {
        if (!dfs(project)) return undefined;
      }
    }

    function dfs(project) {
      if (project.getState() === STATE.PARTIAL) return false;

      if (project.getState() === STATE.BLANK) {
        project.setState(STATE.PARTIAL);
        let children = project.getChildern();

        for (let i = 0; i < children.length; i++) {
          let child = children[i];

          if (!dfs(child)) return false;
        }

        project.setState(STATE.COMPLETED);
        order.push(project);
      }

      return true;
    }

    return order.map(project => project.getName());
  })(newGraph(projects, dependencies).getNodes());
}

module.exports = { buildOrderByLookUp, buildOrderByDfsLookUp };
