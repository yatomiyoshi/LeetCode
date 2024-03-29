# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
    def isSymmetric(self, root):
        """
        :type root: TreeNode
        :rtype: bool
        """
        if not root.left and not root.right:
            return True
        if root.left and not root.right:
            return False
        if not root.left and root.right:
            return False
        if root.left.val != root.right.val:
            return False
        self.check(root.left, root.right)
        return True

    def check(self, right_node, left_node):
        if right_node.val != left_node.val:
            return False
        if right_node.left and not left_node.right:
            return False
        if not right_node.left and not left_node.right:
            return False
        if right_node.right and not left_node.left:
            return False
        if not right_node.right and left_node.left:
            return False
        self.check(right_node.left, left_node.right)
        self.check(right_node.right, left_node.left)