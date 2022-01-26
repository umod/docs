---
hide_table_of_contents: true
---

# CanUseWires

## Usage

* Useful for allowing or preventing a player from using wires
* Returning a non-null value overrides default behavior

## Examples

```csharp title=""
object CanUseWires(BasePlayer player)
{
    Puts($"{player.displayName} has just tried to use wires");
    return null;
}
```
