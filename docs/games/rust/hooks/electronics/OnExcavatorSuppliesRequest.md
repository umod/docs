---
hide_table_of_contents: true
---

# OnExcavatorSuppliesRequest

## Usage

* Called before excavator supplies are requested by a player
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnExcavatorSuppliesRequest(ExcavatorSignalComputer computer, BasePlayer player)
{
    Puts("OnExcavatorSuppliesRequest works!");
    return null;
}
```
