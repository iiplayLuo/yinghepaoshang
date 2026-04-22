import json

# 测试城市数据加载
try:
    with open('cities.json', 'r', encoding='utf-8') as f:
        cities = json.load(f)
    print(f'成功加载了{len(cities)}个城市')
    print('前5个城市：')
    for city in cities[:5]:
        print(f'{city["name"]}: ({city["x"]}, {city["y"]}) - {city["country"]}')
    print('测试通过！')
except Exception as e:
    print(f'测试失败：{e}')