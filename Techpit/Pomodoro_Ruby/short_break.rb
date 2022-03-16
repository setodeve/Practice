# frozen_string_literal: true

require './break'

# 短休憩クラス
class ShortBreak < Break
  def initialize
    super(type: :short)
  end
end
