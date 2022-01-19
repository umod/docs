---
hide_table_of_contents: true
---

# CanAffordToPlace

## Usage

* Called before resources for placing a building block are checked
* Return false to prevent player from affording placement

## Examples

```csharp title="Allow building placement without resource cost for admin"
object CanAffordToPlace(BasePlayer player, Planner planner, Construction contruction)
{
    if (player.IsAdmin)
    {
        return true;
    }

    return null;
}
```
