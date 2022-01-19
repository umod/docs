---
hide_table_of_contents: true
---

# CanAffordToPlace

## Usage

* Called before resources for placing a building block are checked
* Return false to prevent player from placing a building block

## Examples

```csharp title="Allow unlimited building for admin"
bool CanAffordToPlace(BasePlayer player, Planner planner, Construction contruction)
{
    if (player.IsAdmin)
    {
        return true;
    }

    return false;
}
```
