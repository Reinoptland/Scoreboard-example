# Define scoreboard state, pass down as props

- Define a state in scoreboard (names or players)
- Make a player component
- Import player component
- Map over this.state.players and create player component for each player
- Pass down props the player component
- Props in player component

# Adding score to the player component, and + button

- Define state in Player component
- Use this.state.score in the render
- Change the score in the state to see if it changes on screen
- Create a button
- Add an event listener to button
- Create an event handler
- Make the event handler log hello
- Test
- Make the event handler update the state
- Test

# Sorting players

- Change the state scoreboard component to player objects with name, id and score
- Pass down the score, name and id props to Player
- Use the new props in the player component
- Test
- Sort the players based on score using .sort()
- Test
- Cleanup: Take out score state from player

# Updating player score using callback prop (now stored in scoreboard)

- Define incrementScore function in Scoreboard, make it log 'hello' to test
- Pass down incrementScore as a prop to Player
- Use this.props.incrementScore in your event handler of the + button
- Test
- Give increment score an parameter id (so we know what player to update)
- In Player, pass in the id of the player as an argument when calling this.props.incrementScore
- Test if you have the id by logging it
- Map over the players in the Scoreboard, update the player where the id matches
- Test

Generally speaking:

# Adding Event listener & Update state

- Make component (like a button)
- Define event listeners and handlers
- Test if handler is getting called
- use setState and logic to update the state
- Test again

# Callback props

- Declare callback function in the component you want to update
- Pass it down to the child
- Call it in the child (to test)
- Make the callback function update the state
- Test again
