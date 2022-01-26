---
hide_table_of_contents: true
---

# OnElevatorCall

## Usage

* Called when an elevator lift is called to a specific floor by electricity
* Returning a non-null value overrides default behavior

## Examples

```csharp title=""
object OnElevatorCall(Elevator elevator, Elevator topElevator)
{
    Puts("OnElevatorCall works!");
    return null;
}
```
