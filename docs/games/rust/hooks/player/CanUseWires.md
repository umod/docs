---
hide_table_of_contents: true
---

# CanUseWires

## Usage

* Useful for allowing or preventing a player from using wires
* Return true/false to override default behavior

## Examples

```csharp title=""
bool? CanUseWires(BasePlayer player)
{
    Puts($"{player.displayName} has just tried to use wires");
    return null;
}
```
