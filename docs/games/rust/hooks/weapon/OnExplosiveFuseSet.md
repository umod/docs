---
hide_table_of_contents: true
---

# OnExplosiveFuseSet

## Usage

* Called when a fuse of an explosive is set
* Returning a non-null value overwrites fuse length

## Examples

```csharp title=""
object OnExplosiveFuseSet(TimedExplosive explosive, float fuseLength)
{
    Puts("OnExplosiveFuseSet works!");
    return null;
}
```
