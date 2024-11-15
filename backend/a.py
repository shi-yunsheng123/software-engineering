import sqlite3

# 连接到数据库
conn = sqlite3.connect(r'E:\trading_competition_platform\backend\instance\db.sqlite3')  # 替换为数据库的实际路径
cursor = conn.cursor()

# 查询语句
game_id = 'dac0a24b-5cb2-46fb-bd70-afb28d5f0f5a'
model = 'LSTM'
date = '2023-05-02'

query = """
SELECT * FROM trade_log
WHERE  model = ? AND date = ?
"""

# 执行查询
cursor.execute(query, (model, date))

# 获取查询结果
results = cursor.fetchall()

# 输出结果
if results:
    for row in results:
        print(row)  # 打印每一行数据
else:
    print("No results found")

# 关闭连接
conn.close() 