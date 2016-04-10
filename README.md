# Classic Arcade Game Clone

This is an arcade game based on the classic arcade game frogger.

## Gameplay

### Goal

The goal of the game is to score as many points as possible. You score points
by getting your character across the street, past the bugs, and into the water.

### Movement

Use the arrow keys on a keyboard to move the character up, down, left, and right.

### Scoring

The amount of points that you score depends on the value of the timer when you
reach the water. If you are able to get to the water quickly, you score more
points. Once you reach the water, the timer resets and your character's position
is reset so that you have another chance to earn more points.

There are two ways that you can lose points

- If you get hit by a bug, you lose 50 points.
- If the timer runs out, you lose 100 points.

In addition, when either of these events occur, your position will be reset
back to the starting position.

### Enemy Speed

As an additional wrinkle, the bugs will get progressively faster as the game
goes on. However, if your character collides with a bug the bug will slow down
before starting to speed up again.

## Known Issues

At the moment there is no way to 'win' or 'lose' the game. It just keeps going
on and on, regardless of your score. µ
