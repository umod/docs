---
hide_table_of_contents: true
---

# OnElevatorButtonPress

## Usage

* Called when a player presses a button on an elevator lift
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnElevatorButtonPress(ElevatorLift lift, BasePlayer player, Elevator.Direction direction, bool toTopOrBottom)
{
    Puts("OnElevatorButtonPress works!");
    return null;
}
```
