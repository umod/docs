---
hide_table_of_contents: true
---

# OnRfBroadcasterRemove

## Usage

* Called right before an object stops broadasting an RF frequency
* Returning a non-null value overrides default behavior

## Examples

```csharp title=""
object OnRfBroadcasterRemove(IRFObject obj, int frequency)
{
    Puts("OnRfBroadcasterRemove works!");
    return null;
}
```
