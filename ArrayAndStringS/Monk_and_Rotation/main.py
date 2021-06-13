#space O(1) time O(n^2)
def solve(arr:list,num:int):
    length = len(arr)
    rotation = num%length
    if rotation == 0:
        return arr
    else:
        i = 0
        while i<rotation:
            arr.insert(0,arr.pop())
            i+=1
        return arr


#main running code     
def main():
    #inputing testcase
    test_case_no = eval(input('Enter num of test cases : '))
    ## number of elements and rotation
    ## elements 
    for i in range(test_case_no): #O(n)
        arr_ele_num , rotation_num = map(int,input('Enter number of elements and rotation number : ').split(','))
        arr_elm =list(map(int, input('enter arr elements with seperation "," : ').split(',')))
        print(*solve(arr_elm,rotation_num))
main()


# Best way not mine  time -O(n),Space - O(1)

# testCase  = int(input())
# for _ in range(testCase):
#     n,k = map(int,input().split())
#     l = list(map(int,input().split()))
#     x = k%n
#     print(*(l[n-x:]+l[:n-x]))
        