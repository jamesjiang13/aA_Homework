require 'byebug'

class Map
    attr_reader :arr

    def initialize 
        @arr = []
    end

    def set(key, value)
        @arr.each { |pair| pair[1] = value if pair[0] == key }
        @arr << [key,value]
    end

    def get(key)
        # debugger
        @arr.each { |pair| return pair[1] if pair[0] == key }
        print "Key does not exist"
    end

    def delete(key)
        @arr.each { |pair| @arr.delete(pair) if pair[0] == key }
    end

    def [](pos)
        @arr[pos]
    end
    
    def show
        self[0]
    end
end
