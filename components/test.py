import time

def traverse_row(b,d,tpos,board,dirs):
    diff = b[1]-tpos[1]
    flags = []
    u = 0 
    for p in range(abs(diff)):

        if diff==0:
            if board[b[0]][b[1]] == "d":
                
                dirs.append("CLEAN")
                
        elif diff>0:
            dirs.append("LEFT")
            board[b[0]][b[1]] = "-"
            if board[b[0]][b[1]-1]!="d":
                board[b[0]][b[1]-1]="b"
            else:
                
                    dirs.append("CLEAN")
            b = b[0],b[1]-1
            flags.append((b[0],b[1]-1))
            

        
            
        else:
            
            dirs.append("RIGHT")
            board[b[0]][b[1]] = "-"
            if board[b[0]][b[1]+1]!="d":
                board[b[0]][b[1]+1]="b"
            else:
                
                    dirs.append("CLEAN")
            
            b = b[0],b[1]+1
            flags.append((b[0],b[1]+1))
        u+=1
            
    
    return b,board,dirs,flags
def records(b,d,board,dirs=[],flags = [],i=0):

    # for i in range(len(d))
    if i==b[0]:
        for pos,coor in enumerate(d[i]):
            if coor not in flags:
                
                b,board,dirs,flags = traverse_row(b,d,coor,board,dirs)
 
            
        if i<len(d)-1:
            i+=1
            dirs = records(b,d,board,dirs,flags,i=i)
            return dirs
        elif i==len(d)-1:
            return dirs
       
    else:
        if i<b[0]:
            dirs.append("UP")
            b = b[0]-1,b[1]
            if board[b[0]][b[1]]!="d":
                board[b[0]][b[1]] = "b"
            else:
                dirs.append("CLEAN")
        else:
            dirs.append("DOWN")
            b = b[0]+1,b[1]
            if board[b[0]][b[1]]!="d":
                board[b[0]][b[1]] = "b"
            else:
                dirs.append("CLEAN")


        dirs = records(b,d,board,dirs,flags,i = i)
        return dirs

        
            
                
            
def next_move(posx, posy, dimx, dimy, board):
    b = (posy,posx)
    d = []
    for i in range(dimy):
        d1 = []
        for j in range(dimx):
            if board[i][j]=="d":
                d1.append((i,j))
        d.append(d1)
    dirs = records(b,d,board)
    # print("Result",dirs,"End")
board = [['b', 'd', '-', '-', '-'], 
         ['-', 'd', '-', '-', '-'],
         ['-', '-', '-', 'd', '-'], 
         ['-', '-', '-', 'd', '-'], 
         ['-', '-', 'd', '-', 'd']]

start1 = time.perf_counter()
next_move(0,0,len(board[0]),len(board),board)
end1 = time.perf_counter()
execution_time1 = (end1 - start1) * 1000  # time in milliseconds
print(execution_time1,"TIME1")
print("Program1 end","*"*8)
def next_move2(posx, posy, dimx, dimy, board):
    # Check if the current cell is dirty
    if board[posx][posy] == 'd':
        print('CLEAN')
        board[posx][posy] = '-'
    else:
        # Find the nearest dirty cell
        nearest_dirt = None
        nearest_distance = float('inf')
        for i in range(dimx):
            for j in range(dimy):
                if board[i][j] == 'd':
                    distance = abs(posx - i) + abs(posy - j)
                    if distance < nearest_distance:
                        nearest_dirt = (i, j)
                        nearest_distance = distance

        # Move towards the nearest dirty cell
        if nearest_dirt[0] < posx:
            print('UP')
            posx -= 1
        elif nearest_dirt[0] > posx:
            print('DOWN')
            posx += 1
        elif nearest_dirt[1] < posy:
            print('LEFT')
            posy -= 1
        elif nearest_dirt[1] > posy:
            print('RIGHT')
            posy += 1

        # Clean the current cell if it's dirty
        if board[posx][posy] == 'd':
            print('CLEAN')
            board[posx][posy] = '-'

        # If all cells are cleaned, stop moving
        if all(cell == '-' for row in board for cell in row):
            return

        # Make the next move
        next_move(posx, posy, dimx, dimy, board)
print("Program 2 start")
start2 = time.perf_counter()
next_move2(0,0,len(board[0]),len(board),board)
end2 = time.perf_counter()
execution_time2 = (end2 - start2) * 1000  # time in milliseconds
print(execution_time2,"TIME2")

if execution_time1<execution_time2:
    print("Program 1 is better: ",execution_time1)
else:
    print("Program 2 is better: ",execution_time2)