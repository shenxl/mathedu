// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 添加页面加载动画
    const container = document.querySelector('.container');
    container.style.opacity = '0';
    
    setTimeout(function() {
        container.style.transition = 'opacity 1s ease';
        container.style.opacity = '1';
    }, 100);
    
    // 禁用的按钮点击提示
    const disabledButtons = document.querySelectorAll('.button.disabled');
    
    disabledButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // 创建提示元素
            const tooltip = document.createElement('div');
            tooltip.textContent = '这个功能即将推出，敬请期待！';
            tooltip.style.position = 'absolute';
            tooltip.style.backgroundColor = '#333';
            tooltip.style.color = 'white';
            tooltip.style.padding = '10px';
            tooltip.style.borderRadius = '5px';
            tooltip.style.zIndex = '100';
            tooltip.style.top = (e.pageY - 50) + 'px';
            tooltip.style.left = (e.pageX - 100) + 'px';
            tooltip.style.opacity = '0';
            tooltip.style.transition = 'opacity 0.3s ease';
            
            document.body.appendChild(tooltip);
            
            // 显示提示
            setTimeout(function() {
                tooltip.style.opacity = '1';
            }, 10);
            
            // 3秒后移除提示
            setTimeout(function() {
                tooltip.style.opacity = '0';
                setTimeout(function() {
                    document.body.removeChild(tooltip);
                }, 300);
            }, 3000);
        });
    });
}); 