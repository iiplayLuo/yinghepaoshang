import json

def view_map():
    with open('cities.json', 'r', encoding='utf-8') as f:
        cities = json.load(f)

    # 创建200x200的网格地图
    width, height = 80, 40
    grid = [[' ' for _ in range(width)] for _ in range(height)]

    # 将坐标映射到网格
    # X: 0-200 -> 0-79 (width-1)
    # Y: 0-200 -> 0-39 (height-1)，注意Y轴要翻转
    for city in cities:
        x = int(city['x'] * (width - 1) / 200)
        y = int((200 - city['y']) * (height - 1) / 200)
        x = max(0, min(width - 1, x))
        y = max(0, min(height - 1, y))

        # 在网格中放置城市标记
        country = city['country']
        # 使用国家的首字母作为标记
        markers = {
            '秦': '秦', '楚': '楚', '齐': '齐', '燕': '燕',
            '赵': '赵', '魏': '魏', '韩': '韩', '蜀': '蜀',
            '巴': '巴', '吴': '吴', '越': '越', '鲁': '鲁',
            '宋': '宋', '卫': '卫', '薛': '薛'
        }
        marker = markers.get(country, '?')

        # 如果该位置已经有城市，用+表示
        if grid[y][x] != ' ':
            grid[y][x] = '+'
        else:
            grid[y][x] = marker

    # 打印地图边框
    print('=' * (width + 2))
    print(f'地图范围: X(0-200), Y(0-200) | 城市总数: {len(cities)}')
    print('=' * (width + 2))

    # 打印地图
    for row in grid:
        print('|' + ''.join(row) + '|')

    print('=' * (width + 2))

    # 打印图例
    print('\n图例:')
    print('秦=秦  楚=楚  齐=齐  燕=燕  赵=赵  魏=魏  韩=韩')
    print('蜀=蜀  巴=巴  吴=吴  越=越  鲁=鲁  宋=宋  卫=卫')
    print('+=多城市重叠')

    # 按国家统计城市数量
    print('\n城市分布统计:')
    country_count = {}
    for city in cities:
        country = city['country']
        country_count[country] = country_count.get(country, 0) + 1

    for country, count in sorted(country_count.items()):
        print(f'{country}: {count}个城市')

def view_map_detailed():
    """显示详细的地图信息，包括城市列表"""
    with open('cities.json', 'r', encoding='utf-8') as f:
        cities = json.load(f)

    print('\n' + '='*60)
    print('春秋战国时期大地图 - 60个城市分布')
    print('='*60)

    # 按坐标排序显示城市
    sorted_cities = sorted(cities, key=lambda c: (c['x'], c['y']))

    print('\n城市列表（按X坐标排序）:')
    print('-'*60)
    for i, city in enumerate(sorted_cities, 1):
        print(f"{i:2}. {city['name']:4} ({city['x']:3}, {city['y']:3}) "
              f"- {city['country']}国 - {city['size']} - {city['speciality']}")

    print('-'*60)
    print(f'总计: {len(cities)}个城市')

    # 显示已发现城市（模拟玩家探索进度）
    print('\n模拟玩家已发现城市（从咸阳出发探索）:')
    discovered = ['咸阳']
    x, y = 100, 100
    for city in sorted_cities:
        if city['name'] == '咸阳':
            continue
        # 假设玩家向各个方向探索
        if abs(city['x'] - x) <= 30 or abs(city['y'] - y) <= 30:
            discovered.append(city['name'])

    print(f'已发现: {len(discovered)}个城市')
    for name in discovered[:10]:
        print(f'  - {name}')
    if len(discovered) > 10:
        print(f'  ... 还有{len(discovered)-10}个')

if __name__ == '__main__':
    view_map()
    view_map_detailed()