---
hide_table_of_contents: true
---

# OnElevatorMove

## Usage

* Called right before an elevator starts moving to the target floor
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnElevatorMove(Elevator elevator, int targetFloor)
{
    Puts("OnElevatorMove works!");
    return null;
}
```
