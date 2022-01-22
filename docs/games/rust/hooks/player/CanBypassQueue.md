---
hide_table_of_contents: true
---

# CanBypassQueue

## Usage

* Called before the player is added to the connection queue
* Return true to bypass the queue, return null to queue the player

## Examples

```csharp title="Allow owners/moderators to bypass queue"
object CanBypassQueue(Network.Connection connection)
{
    if (connection.authLevel > 0)
    {
        return true;
    }

    return null;
}
```

```csharp title="Allow players with permission to bypass queue"
const string permissionBypass = "example.bypass";

object CanBypassQueue(Network.Connection connection)
{
    if (permission.UserHasPermission(connection.userid.ToString(), permissionBypass))
    {
        return true;
    }

    return null;
}
```
