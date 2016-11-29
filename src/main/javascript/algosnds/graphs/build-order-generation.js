const STATE = {
    BLANK: 'BLANK',
    PARTIAL: 'PARTIAL',
    COMPLETED: 'COMPLETED'
};

let graph = function graph() {
        let nodeKeeper = {},
            nodes = [],
            getOrCreateNode = function getOrCreateNode(projectName) {
                if (nodeKeeper[projectName] === undefined) {
                    let newProject = project(projectName);
                    nodeKeeper[projectName] = newProject;
                    nodes.push(newProject);
                }

                return nodeKeeper[projectName];
            },
            addEdges = function addEdges(startEdge, endEdge) {
                let startNode = getOrCreateNode(startEdge),
                    endNode = getOrCreateNode(endEdge);

                startNode.addNeighbor(endNode);
            },
            getNodes = function getNodes() {
                return nodes;
            };

        return {
            getOrCreateNode: getOrCreateNode,
            addEdges: addEdges,
            getNodes: getNodes
        };
    },
    project = function project(projectName) {
        let name = projectName,
            nodeKeeper = {},
            children = [],
            state = STATE.BLANK,
            dependencies = 0,
            incrementDependencies = function incrementDependencies() {
                dependencies++;
            },
            decrementDependencies = function decrementDependencies() {
                dependencies--;
            },
            getDependencies = function getDependencies() {
                return dependencies;
            },
            addNeighbor = function addNeighbor(dependentProject) {
                if (nodeKeeper[dependentProject.getName()] === undefined) {
                    nodeKeeper[dependentProject.getName] = dependentProject;
                    children.push(dependentProject);
                    dependentProject.incrementDependencies();
                }
            },
            getChildern = function getChildern() {
                return children
            },
            getName = function getName() {
                return name
            },
            getState = function getState() {
                return state
            },
            setState = function setState(currentState) {
                state = currentState
            };

        return {
            getName: getName,
            addNeighbor: addNeighbor,
            incrementDependencies: incrementDependencies,
            decrementDependencies: decrementDependencies,
            getChildern: getChildern,
            getDependencies: getDependencies,
            getState: getState,
            setState: setState
        };
    },
    newGraph = function graphBuilder(projects, dependencies) {
        let newGraph = graph();

        projects.forEach((project) => {
            newGraph.getOrCreateNode(project);
        });

        dependencies.forEach((dependenciesPair) => {
            newGraph.addEdges(dependenciesPair[0], dependenciesPair[1]);
        })

        return newGraph;
    };

function buildOrderByLookUp(projects, dependencies) {

    return ( function orderProjects(projects) {
        let order = [],
            endOfList = addNonDependentProjects(projects, 0),
            toBeProcessed = 0;

        while (toBeProcessed < projects.length) {
            let current = order[toBeProcessed];

            if (current === undefined) return;

            let children = current.getChildern();
            children.forEach(child => child.decrementDependencies());

            endOfList = addNonDependentProjects(children, endOfList);
            toBeProcessed++;
        }

        function addNonDependentProjects(projects, offset) {
            projects.forEach((project) => {
                if (project.getDependencies() === 0) {
                    order[offset] = project;
                    offset++;
                }
            });

            return offset;
        }

        return order.map(project => project.getName());
    } )(newGraph(projects, dependencies).getNodes());
}

function buildOrderByDfsLookUp(projects, dependencies) {

    return ( function orderProjects(projects) {
        let order = [];

        for (let i = 0; i < projects.length; i++) {
            let project = projects[i];

            if (project.getState() === STATE.BLANK) {
                if (!dfs(project))
                    return undefined;
            }
        }

        function dfs(project) {
            if (project.getState() === STATE.PARTIAL)
                return false;

            if (project.getState() === STATE.BLANK) {
                project.setState(STATE.PARTIAL);
                let children = project.getChildern();

                for (let i = 0; i < children.length; i++) {
                    let child = children[i];

                    if (!dfs(child))
                        return false;
                }

                project.setState(STATE.COMPLETED);
                order.push(project);
            }

            return true;
        }

        return order.map(project => project.getName());
    } )(newGraph(projects, dependencies).getNodes());
}

export { buildOrderByLookUp, buildOrderByDfsLookUp };