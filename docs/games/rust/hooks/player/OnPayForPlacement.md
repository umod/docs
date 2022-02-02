---
hide_table_of_contents: true
---

# OnPayForPlacement

## Usage

* Called when a player is paying for placement. Useful for preventing paying for placing deployables, building blocks and etc
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnPayForPlacement(BasePlayer player, Planner planner, Construction construction)
{
    Puts("OnPayForPlacement works!");
    return null;
}
```
