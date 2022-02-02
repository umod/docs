---
hide_table_of_contents: true
---

# OnExcavatorSuppliesRequested

## Usage

* Called after excavator supplies are requested by a player
* No return behavior

## Examples

```csharp title=""
void OnExcavatorSuppliesRequested(ExcavatorSignalComputer computer, BasePlayer player, CargoPlane plane)
{
    Puts("OnExcavatorSuppliesRequested works!");
}
```
