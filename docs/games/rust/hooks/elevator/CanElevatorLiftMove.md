---
hide_table_of_contents: true
---

# CanElevatorLiftMove

## Usage

* Called when an elevator lift is attempting to move
* Return true or false to override default behavior

## Examples

```csharp title=""
bool? CanElevatorLiftMove(ElevatorLift lift)
{
    Puts("CanElevatorLiftMove works!");
    return null;
}
```
