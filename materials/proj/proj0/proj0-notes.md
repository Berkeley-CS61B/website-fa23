PITFALLS
--------

In answering bug-submits, we've noticed a number of common problems,
which we've collected here and will continue to update.  Check this
first for mysterious problems you might be having.

1. When you make your first move, there should be two tiles, not one, on the
   board.  (Seeing that the spec implies this is a nice exercise in careful,
   precise reading, which we highly recommend.)

2. Make sure that your program compiles on the instructional machines, which is
   where it will be tested.  

   A common problem is that some Java compilers by default accept
   Unicode characters in strings (that is, those that are not part of
   the ASCII character set), whereas the instructional machines do
   not.  Thus, those who added code to translate the Unicode arrow
   symbols into Up, Down, etc., and simply put these these characters
   in quotes, will find that their programs don't compile on the
   instructional machines.  This is easy to fix: just change the
   compilaton flags in game2048/Makefile to

         JFLAGS = -g -Xlint:unchecked -cp ..:$(CLASSPATH) -d ..  -encoding utf8

3. Many of you are putting off style checking until the last minute.  Don't.
   Some style errors are not easy to fix---in particular methods that are
   too long.  Some of you have not set your program editors to use 4 blanks
   (and NOT a tab character) as the indentation step, and this will cause
   many errors.  Many style errors indicate, well, bad style: unreadably
   cramped code (such as
         for(i=1;i<=N;i++){
   ) or huge sections of commented-out code.

4. Several students had end-of-game tests that did not take into account the
   possibility that the board could be full, but a move was still possible.
   They ended the game prematurely, and caused exceptions in the tester, which
   was expecting that the programs would ask for another random tile.

5. If pieces cannot move in the direction of an arrow key, there is supposed
   to be no effect; in particular, you do NOT get another tile.
