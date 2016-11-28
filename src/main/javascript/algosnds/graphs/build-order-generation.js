export default function generateBuildOrder(projects, dependencies) {
    let graph = function graph() {
            let internalNodeMap = {},
                nodes = [],
                getOrCreateNode = function getOrCreateNode(projectName) {
                    if (internalNodeMap[projectName] === undefined) {
                        let newProject = project(projectName);
                        internalNodeMap[projectName] = newProject;
                        nodes.push(newProject);
                    }

                    return internalNodeMap[projectName];
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
                internalNodeMap = {},
                children = [],
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
                    if (internalNodeMap[dependentProject.getName()] === undefined) {
                        internalNodeMap[dependentProject.getName] = dependentProject;
                        children.push(dependentProject);
                        dependentProject.incrementDependencies();
                    }
                },
                getChildern = function getChildern() {
                    return children
                },
                getName = function getName() {
                    return name
                };

            return {
                getName: getName,
                addNeighbor: addNeighbor,
                incrementDependencies: incrementDependencies,
                decrementDependencies: decrementDependencies,
                getChildern: getChildern,
                getDependencies: getDependencies
            };
        },
        builtGraph = ( function graphBuilder(projects, dependencies) {
            let newGraph = graph();

            projects.forEach((project) => {
                newGraph.getOrCreateNode(project);
            });

            dependencies.forEach((dependenciesPair) => {
                newGraph.addEdges(dependenciesPair[0], dependenciesPair[1]);
            })

            return newGraph;
        } )(projects, dependencies);


    return ( function orderProjects(projects) {
        let order = [],
            endOfList = addNonDependentProjects(order, projects, 0),
            toBeProcessed = 0;

        while (toBeProcessed < projects.length) {
            let current = order[toBeProcessed];

            if (current === undefined) return;

            let children = current.getChildern();
            children.forEach(child => child.decrementDependencies());

            endOfList = addNonDependentProjects(order, children, endOfList);
            toBeProcessed++;
        }

        function addNonDependentProjects(order, projects, offset) {
            projects.forEach((project) => {
                if (project.getDependencies() === 0) {
                    order[offset] = project;
                    offset++;
                }
            });

            return offset;
        }

        return order.map(project => project.getName());
    } )(builtGraph.getNodes());
}