let a = [  
  {  
    parentMeasure: null, // 为空则没有父表头  
    measure: '指标1'  
  },  
  {  
    parentMeasure: '指标1', // 父表头为指标1  
    measure: '指标2'  
  },  
  {  
    parentMeasure: '指标1',  
    measure: '指标3'  
  },  
  {  
    parentMeasure: '指标3',  
    measure: '指标4'  
  },  
  {  
    parentMeasure: '指标3',  
    measure: '指标5'  
  },  
  {  
    parentMeasure: '', // 为空字符串则没有父表头  
    measure: '指标6'  
  }  
];  
  
function convertToArrayTree(arr) {  
  // 创建一个映射来存储已经处理过的节点  
  const processed = new Map();  
  
  // 递归函数来构建树  
  function buildTree(item) {  
    // 如果当前节点已经处理过，直接返回  
    if (processed.has(item.measure)) {  
      return processed.get(item.measure);  
    }  
  
    // 创建当前节点的副本  
    const currentNode = { ...item };  
    // 初始化子节点数组  
    currentNode.children = [];  
  
    // 查找并添加子节点  
    const children = arr.filter(child => child.parentMeasure === item.measure);  
    for (const child of children) {  
      currentNode.children.push(buildTree(child)); // 递归处理子节点  
    }  
  
    // 将当前节点添加到已处理映射中  
    processed.set(item.measure, currentNode);  
  
    // 返回构建好的节点  
    return currentNode;  
  }  
  
  // 过滤出根节点（没有父节点的节点）  
  const roots = arr.filter(item => !item.parentMeasure || item.parentMeasure === '');  
  // 对每个根节点调用buildTree来构建完整的树  
  return roots.map(buildTree);  
}  
  
// 调用函数并打印结果  
let tree = convertToArrayTree(a);  
console.log(tree);