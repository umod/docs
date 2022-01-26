---
hide_table_of_contents: true
---

# CanPushBoat

## Usage

* Useful for canceling boat push
* Returning a non-null value cancels default behavior

## Examples

```csharp title=""
object CanPushBoat(BasePlayer player, MotorRowboat boat)
{
    Puts("CanPushBoat works!");
    return null;
}
```
