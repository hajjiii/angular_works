# text="hello hi hello hi hi"
# wc={}
# words=text.split(" ")
# #  words=["hello",hi,hello,hi]
# for word in words:
#     if(word in wc):
#         wc[word]+=1
#     else:
#         wc[word]=1
# print(wc)

s="abaccc"
nw=""
sd=""
for i in s:
    if i not in nw:
        nw=nw+i
    else:
        print(i)
        break