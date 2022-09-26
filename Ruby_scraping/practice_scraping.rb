# 参考
# https://zenn.dev/arao99/articles/5541a9bd74fd05

require 'open-uri'
require 'nokogiri'

url = 'https://www.yahoo.co.jp/'

# urlにアクセスしてhtmlを取得する
html = URI.open(url).read

# 取得したhtmlをNokogiriでパースする
doc = Nokogiri::HTML.parse(html)

# htmlのtitleを取得して出力する
title = doc.title
puts title
doc.at_css('section#tabpanelTopics1 ul').css('h1').each do |h1|
  puts h1.text.strip
end
