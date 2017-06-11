import random
class Solution(object):
    def shuffle(self, arr):
        random.shuffle(arr)
        return arr

arr = [1, 2, 3, 4]
print Solution().shuffle(arr)
