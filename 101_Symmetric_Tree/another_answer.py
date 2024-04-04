class Solution(object):
    def isSymmetric(self, root):
        """
        :type root: TreeNode
        :rtype: bool
        """
        if not root:
            return True
        return self.check(root.left, root.right)

    def check(self, left_node, right_node):
        if not left_node and not right_node:
            return True
        if not left_node or not right_node:
            return False
        if left_node.val != right_node.val:
            return False
        return self.check(left_node.left, right_node.right) and self.check(left_node.right, right_node.left)
