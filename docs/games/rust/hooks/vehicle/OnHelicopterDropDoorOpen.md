---
hide_table_of_contents: true
---

# OnHelicopterDropDoorOpen

## Usage

* Called when a CH47 helicopter is opening its drop door
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnHelicopterDropDoorOpen(CH47HelicopterAIController heli)
{
    Puts("OnHelicopterDropDoorOpen works!");
    return null;
}
```
