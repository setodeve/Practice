import time
import datetime
import sys
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By

options = Options()
options.binary_location = '/Applications/Brave Browser.app/Contents/MacOS/Brave Browser'
driver_path = "./chromedriver_mac64/chromedriver"
brave = webdriver.Chrome(options = options, executable_path = driver_path)

# input data
f = open('memo.txt', 'r')
url = f.readline()
path = f.readline()
id = f.readline()
password = f.readline()
dt_now = datetime.datetime.now()
year = str(dt_now.year)
month = str(dt_now.month)
day = str(dt_now.day)
hour = str(dt_now.hour)
hour = str(dt_now.hour)
minute = str(dt_now.minute)

# move cws
brave.get(url)

brave.find_element(By.XPATH,path).click()

# login
id_form = brave.find_element(By.ID,"legacy_xoopsform_block_uname")
id_form.send_keys(id)
pass_form = brave.find_element(By.ID,"legacy_xoopsform_block_pass")
pass_form.send_keys(password)

form_button = brave.find_element(By.XPATH,"//input[@alt='ログイン']")
form_button.click()

# move cws
brave.get(url)

time.sleep(3)

# input work-time
kintai_button = brave.find_element(By.XPATH,"//a[text()='勤怠']")
kintai_button.click()
kintai_input_button = brave.find_element(By.XPATH,"//a[text()='勤怠実績　入力']")
kintai_input_button.click()

time.sleep(1)

# move input work day on the day
day_id = "BTNDTL" + year + "_" + month + "_" + day + "0"
day_xpath = "//input[@id="+ "'" + day_id+ "'" + "]"
day_button = brave.find_element(By.XPATH,day_xpath)
day_button.click()

report = brave.find_element(By.XPATH,"//textarea[@name='JSKMM']")
report.send_keys("<作業面・体調面>特に問題なし")

next = brave.find_element(By.ID, "btnNext1")
next.click()
applying = brave.find_element(By.ID, "dSubmission0")
applying.click()

time.sleep(100)


