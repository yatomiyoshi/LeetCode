# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
    answer = []
    def inorderTraversal(self, root):
        """
        :type root: TreeNode
        :rtype: List[int]
        """
        self.search_node(root)
        return self.answer

    def search_node(self, node):
        if not node.left:
            self.search_node(node.left)
        self.answer.append(node.value)
        if not node.right:
            self.search_node(node.right)