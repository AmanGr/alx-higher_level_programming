#!/usr/bin/python3
"""Defines Class square"""


class Square:

    """class Instantiation"""
    def __init__(self, size=0):
        self.__size = size

    """Propesrty of  attribute size"""
    @property
    def size(self):
        return self.__size

    """Sets attribute size"""
    @size.setter
    def size(self, value):
        if type(value) is not int:
            raise TypeError("size must be an integer")
        if value < 0:
            raise ValueError("size must be >= 0")
        self.__size = value

    """Public instance method- returns current area"""
    def area(self):
        return self.__size*self.__size

    """Public instance method- returns prints the square"""
    def my_print(self):
        if self.__size == 0:
            print("")
        else:
            for counter_total in range(0, self.__size):
                for counter_row in range(0, self.__size):
                    print("#", end="")
                print("")
