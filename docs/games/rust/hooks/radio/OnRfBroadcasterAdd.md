---
hide_table_of_contents: true
---

# OnRfBroadcasterAdd

## Usage

* Called right before an object starts broadcasting an RF frequency
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnRfBroadcasterAdd(IRFObject obj, int frequency)
{
    Puts("OnRfBroadcasterAdd works!");
    return null;
}
```
