class Solution(object):
    def whichAreIn(self, arr1, arr2):
        res = []
        for el1 in arr1:
            for el2 in arr2:
                if el1 not in res and el1 in el2:
                    res.append(el1)
                    break
        return sorted(res)



arr1 = ["live", "arp", "strong"]
arr2 = ["lively", "alive", "harp", "sharp", "armstrong"]
print Solution().whichAreIn(arr1, arr2)
