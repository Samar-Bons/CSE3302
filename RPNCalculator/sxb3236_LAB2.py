# Samarjit Singh Bons
# 1001623236
# 4/ /2021
# Ubuntu 20.04.2 LTS 

f = open("input_RPN.txt","r")

for x in f:
    #print(x)

    lineList = x.split()
    #print(lineList)
    stack = []

    for y in lineList:
        if y == "*":
            op1 = stack.pop()
            op2 = stack.pop()

            result = op1 * op2

            stack.append(result)
        
        elif y == "/":
            op1 = stack.pop()
            op2 = stack.pop()

            result = op1 / op2

            stack.append(result)
        
        elif y == "+":
            op1 = stack.pop()
            op2 = stack.pop()

            result = op1 + op2

            stack.append(result)
        
        elif y == "-":
            op1 = stack.pop()
            op2 = stack.pop()

            result = op1 - op2

            stack.append(result)
        
        else:
            stack.append(int(y))
    
    print(stack.pop())


    
f.close()
