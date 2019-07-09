# jo_wilder

### Logging
Each event is comprised of:
1. Event Type:
   - click (0)
   - hover (1)
   - checkpoint (2)
   - startgame (3)
   - endgame (4)
2. Type Data
3. Event Subtype:
   - navigate (0)
   - notebook (1)
   - map (2)
   - notification (3)
   - object (4)
   - observation (5)
   - person (6)
   - cutscene (7)
   - wildcard (8) (assessments)
   - basic (9)
4. Subtype Data
5. Event Name (contained within subtype data)
   - basic  (0)
   - open (1)
   - close (2)
   - choice (3)
   - next (4)
   - prev (5)
6. room fqid (Fully Qualified ID)
7. id (fqid minus the room fqid)

Data is as follows (none if not listed):
- Click: screen coordinates, room coordinates
- Hover: start_time, end_time (client-side time)
- Startgame: inputted save code, fullscreen mode on/off, music on/off, high quality graphics on/off
- notebook: page_number
- wildcard: correct (the correct answer to the problem), answer (the selected answer)

Note: Each element in the game has a unique FQID.

