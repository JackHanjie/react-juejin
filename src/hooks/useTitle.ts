import { memo, useEffect } from 'react'
import { useLocation } from 'react-router'

// 路由标题映射 - 支持嵌套路由
const routeTitles: Record<string, string> = {
  '/': '稀土掘金',
  '/recommended': '推荐 - 掘金',
  '/following': '关注 - 掘金',
};

const useTitle = () => {
  const location = useLocation();
  // 根据路由变化设置标题，确保子组件也能显示对应的标题
  useEffect(() => {
    let title = ''; // 默认标题
    
    // 检查是否有完全匹配的路由
    if (routeTitles[location.pathname]) {
      title = routeTitles[location.pathname];
    } 

    document.title = title;
  }, [location.pathname]);
}

export default useTitle