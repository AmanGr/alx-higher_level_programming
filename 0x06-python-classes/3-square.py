#!/usr/bin/python3
"""Defines Class square"""


class Square:

    """class Instantiation"""
    def __init__(self, size=0):
        if type(size) is not int:
            raise TypeError("size must be an integer")
        if size < 0:
            raise ValueError("size must be >= 0")
        self.__size = int(size)

    """Public instance method- returns current area"""
    def area(self):
        return self.__size*self.__size
