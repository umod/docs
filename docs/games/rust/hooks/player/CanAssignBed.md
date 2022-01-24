---
hide_table_of_contents: true
---

# CanAssignBed

## Usage

* Called before a sleeping bag/beds is assigned to another player
* Return false to prevent player from assigning bags/beds

## Examples

```csharp title="Prevent non-admin from assigning based on bag/bed name"
object CanAssignBed(BasePlayer player, SleepingBag bag, ulong targetPlayerId)
{
    if (!player.IsAdmin && bag.niceName.Contains("Home"))
    {
        player.ChatMessage("Sorry, you cannot assign this to another player");
        return false;
    }

    return null;
}
```

```csharp title="Only allow players with permission to assign bag/bed"
const string permissionAllow = "example.allow";

object CanAssignBed(BasePlayer player, SleepingBag bag, ulong targetPlayerId)
{
    if (!permission.UserHasPermission(player.UserIDString, permissionAllow))
    {
        player.ChatMessage("Sorry, you cannot assign this to another player");
        return false;
    }

    return null;
}
```
