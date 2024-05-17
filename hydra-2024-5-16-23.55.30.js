s0.initImage("https://64.media.tumblr.com/98f8bfca71e4e7f2705d4a5c584dc25c/fcc6cfc6d44859c4-1b/s540x810/a56dbb20cbbbf7a0734c2056597e4c5f8a60bbf1.gifv")
osc( [1,10,50,100,250,500].fast(2) ).modulate(src(s0),1).blend(osc(25,1,0.5).kaleid(50)).out(o0)

