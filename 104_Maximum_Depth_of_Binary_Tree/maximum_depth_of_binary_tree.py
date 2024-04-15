# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
    def maxDepth(self, root):
        """
        :type root: TreeNode
        :rtype: int
        """
        if not root:
            return 0

        return self.checkDepth(root)

    def checkDepth(self, node):
        if not node.left and not node.right:
            return 1
        left_depth = self.checkDepth(node.left) if node.left else None
        right_depth = self.checkDepth(node.right) if node.right else None
        if not left_depth:
            return right_depth + 1
        if not right_depth:
            return left_depth + 1
        if left_depth > right_depth:
            return left_depth + 1
        else:
            return right_depth + 1