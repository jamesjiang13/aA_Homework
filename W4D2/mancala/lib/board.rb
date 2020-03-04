class Board
  attr_accessor :cups

  def initialize(name1, name2)
    @cups = Array.new(14){[:stone, :stone, :stone, :stone]}
    @cups[6] = []
    @cups[13] = []
    @name1 = name1
    @name2 = name2
  end

  # def place_stones
  #   # helper method to #initialize every non-store cup with four stones each
  # end

  def valid_move?(start_pos)
    raise 'Invalid starting cup' unless start_pos.between?(1,6) || start_pos.between?(7,12)
    raise 'Starting cup is empty' if @cups[start_pos-1].empty
  end

  def make_move(start_pos, current_player_name)
    rocks = @cups[start_pos].length
    @cups[start_pos] = []
    # rocks.times {


    # end

  end

  def next_turn(ending_cup_idx)
    # helper method to determine whether #make_move returns :switch, :prompt, or ending_cup_idx
  end

  def render
    print "      #{@cups[7..12].reverse.map { |cup| cup.count }}      \n"
    puts "#{@cups[13].count} -------------------------- #{@cups[6].count}"
    print "      #{@cups.take(6).map { |cup| cup.count }}      \n"
    puts ""
    puts ""
  end

  def one_side_empty?
  end

  def winner
  end
end
