class Solution(object):

    def longestPalindrome(self, s):
        strLen = len(s)
        maxLen = 0
        allSubStrings = []
        for i in xrange(strLen):
            for j in xrange(i, strLen):
                allSubStrings.append(s[i: j + 1])

        for k in allSubStrings:
            if k[::-1] == k:
                maxLen = max(maxLen, len(k))
        return maxLen

# s = "string"
s = "racecar"
print Solution().longestPalindrome(s)
