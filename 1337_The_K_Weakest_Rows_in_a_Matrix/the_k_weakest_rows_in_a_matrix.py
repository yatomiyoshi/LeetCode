class Solution(object):
    def kWeakestRows(self, mat, k):
        """
        :type mat: List[List[int]]
        :type k: int
        :rtype: List[int]
        """
        
        rows_and_soldiers = []
        for i in range(len(mat)):
            soldiers = sum(mat[i])
            for j, member in enumerate(rows_and_soldiers):
                if soldiers < member[1]:
                    rows_and_soldiers.insert(j, (i, soldiers))
                    break
            else:
                rows_and_soldiers.append((i, soldiers))