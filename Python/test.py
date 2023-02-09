import openpyxl

FILE = "test.xlsx" 
SHEET = "Sheet1"

wb = openpyxl.load_workbook(FILE)
ws = wb[SHEET]

cell = ws.cell(4, 3) #C4
ws.insert_rows(4)


wb.save(FILE)