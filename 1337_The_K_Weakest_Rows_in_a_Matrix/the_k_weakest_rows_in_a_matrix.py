class Solution(object):
    def kWeakestRows(self, mat, k):
        """
        :type mat: List[List[int]]
        :type k: int
        :rtype: List[int]
        """
        first = mat[0]
        first_soldiers = sum(first)

        weakest_rows_indices = []
        weakest_rows_indices.append(0)

        rows_and_soldiers = []

        if k == 1:
            return weakest_rows_indices
        
        if len(mat) == 1:
            return weakest_rows_indices

        rows_and_soldiers[0] = (0, first_soldiers)

        second = mat[1]
        second_soldiers = sum(second)
        
        for j in range(len(mat)):
            for i, member in enumerate(rows_and_soldiers):
                if member[1] > second_soldiers:
                    rows_and_soldiers.insert(i, (1, second_soldiers))
                    if len(rows_and_soldiers) > k:
                        rows_and_soldiers.pop(-1)
            else:
                rows_and_soldiers.append((1, second_soldiers))
        