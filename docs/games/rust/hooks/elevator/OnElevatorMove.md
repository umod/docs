---
hide_table_of_contents: true
---

# OnElevatorMove

## Usage

* Called right before an elevator starts moving to the target floor
* Returning a non-null value overrides default behavior

## Examples

```csharp title=""
object OnElevatorMove(Elevator topElevator, int targetFloor)
{
    Puts("OnElevatorMove works!");
    return null;
}
```
