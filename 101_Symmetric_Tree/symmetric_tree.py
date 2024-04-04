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
        if not root:
            return True
        if not root.left and not root.right:
            return True
        if root.left and not root.right:
            return False
        if not root.left and root.right:
            return False
        if root.left.val != root.right.val:
            return False
        result = self.check(root.left, root.right)
        return result

    def check(self, left_node, right_node):
        if left_node.val != right_node.val:
            return False
        if left_node.left and not right_node.right:
            return False
        if not left_node.left and right_node.right:
            return False
        if left_node.right and not right_node.left:
            return False
        if not left_node.right and right_node.left:
            return False
        if left_node.right and right_node.left:
            self.check(left_node.right, right_node.left)
        if left_node.left and right_node.right:
            self.check(left_node.left, right_node.right)
        return True